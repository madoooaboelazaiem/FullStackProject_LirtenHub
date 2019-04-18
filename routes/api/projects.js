const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../../models/Project');
const User = require('../../models/User');
const Skill = require('../../models/Skill');
const validator = require('../../validations/projectValidations')
const jwt = require('jsonwebtoken')
const passport = require('passport')
//,passport.authenticate('jwt', {session: false})
// return res.status(401).send('Unauthorized');
router.get('/',passport.authenticate('jwt', {session: false}),async  (req, res) => {   
    const Projects= await Project.find();
    res.json({ data: Projects})
    })

router.get('/:id',passport.authenticate('jwt', {session: false}),async (req,res)=> {
    const pid = req.params.id
	const X =await Project.findOne({"_id":pid})
	if(!X)
        return res.status(404).send({error: 'Project does not exist'})
	else
		res.json({data:X});

})

router.post('/',passport.authenticate('jwt', {session: false}),async (req, res) => {
    if(req.user.User_Category!="Partner"&&req.user.User_Category!="Admin")
        return res.status(401).send('Unauthorized');
    req.body.partner_id=""+req.user._id;
    let isValidated
    if(req.body.need_Consultancy==true)
         isValidated = validator.createValidation(req.body)
    else
         isValidated = validator.createValidationwithoutcons(req.body)
    if (isValidated.error) 
        return res.status(400).send({ error: isValidated.error.details[0].message })
    if(req.body.main_skill){
        const Y=await Skill.findOne({'_id':req.body.main_skill})
        if(!Y)
            return res.status(400).send({error: 'We dont support that skill in lirten'})
    }
    const X= await Project.create(req.body)
	return res.json({msg:'Project was Posted successfully,Now wait until an admin approves it or consultancy applies', data: X});
})

router.put('/:id',passport.authenticate('jwt', {session: false}), async(req, res) => { 
    const pid = req.params.id 
    const X = await Project.findOne({"_id":pid})

    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    if(req.user.User_Category!="Partner"&&req.user.User_Category!="Admin"&&(""+req.user._id!=X.partner_id)&&req.user._id!=(""+X.consultancy_agency_id))
        return res.status(401).send('Unauthorized');
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.UpdateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    if(req.body.main_skill){
    const Y=await Skill.findOne({'_id':req.body.main_skill})
    
    if(!Y)
        return res.status(400).send({error: 'We dont support that skill in lirten'})
    }
    const updatedP = await X.updateOne(req.body)
    res.json({msg: "Project Updated Succsefully"})
})
router.put('/approved/:id',passport.authenticate('jwt', {session: false}), async(req, res) => {
    if(req.user.User_Category!="Admin")
        return res.status(401).send('Unauthorized');
    const pid = req.params.id 
    const X = await Project.findOne({'_id':pid})
    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    // if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
    //     return res.status(400).send({error: 'The Project cannot be edited anymore'})
    // }
    const isValidated = validator.updateValidationapproved(req.body)
    if (isValidated.error) 
        return res.status(400).send({ error: isValidated.error.details[0].message })
    await X.updateOne(req.body)
    if(req.body.approved==true)
        await X.updateOne({status:'Allocation'})
    res.json({msg: 'Project updated successfully'})
})
router.delete('/:id',passport.authenticate('jwt', {session: false}),async (req, res) => {
    try {
        const id = req.params.id
        const X = await Project.findOne({'_id':id})
        if(!X){
            return res.status(404).send({error: 'Project does not exist'})}
        if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id)
            return res.status(401).send('Unauthorized');
        if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'||X.status=="Negotiation"||X.status=="Review"){
            return res.status(400).send({error: 'The Project cannot be Deleted anymore'})
        }
        const deletedP = await Project.findByIdAndRemove(id)
        res.json({msg:'Project was deleted successfully', data: deletedP})
       }
       catch(error) {
           // We will be handling the error later <-- Msh 3aref emta el sara7a
           console.log(error)
       }  
})

router.put('/addSkill/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
	const pid=req.params.id
	const X = await Project.findOne({'_id':pid})
    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id&&(""+req.user._id)!=X.consultancy_agency_id)
        return res.status(401).send('Unauthorized'); 
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.addskill(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const Y=await Skill.findOne({'_id':req.body.Skill})
    if(!Y)
        return res.status(400).send({error: 'We dont support that skill in lirten'})
    X.extra_skills.push(req.body.Skill)
    const updatedP=await X.updateOne({"extra_skills":X.extra_skills})
    res.json({msg: 'Skill Added successfully'})
})

router.put('/addattrib/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
	 const pid=req.params.id
     const X = await Project.findOne({'_id':pid})
    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id&&(""+req.user._id)!=X.consultancy_agency_id)
        return res.status(401).send('Unauthorized'); 
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.addattribute(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    X.extra_attributes.push(req.body.attribute)
    const updatedP=await X.updateOne({"extra_attributes":X.extra_attributes})
    res.json({msg: 'Attribute Added successfully'})
})

router.delete('/delskill/:id',passport.authenticate('jwt', {session: false}),async (req, res) => {
    const pid=req.params.id
	const X = await Project.findOne({"_id":pid})
    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id&&(""+req.user._id)!=X.consultancy_agency_id)
        return res.status(401).send('Unauthorized');
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.addskill(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const result=[]
    
    for(var i=0;i<(X.extra_skills).length;i++){
        if((X.extra_skills)[i]._id!=req.body.Skill)
            result.push((X.extra_skills)[i])
    }
    
    const updatedP=await X.updateOne({"extra_skills":result})
    res.json({msg: 'Skill Deleted successfully'})
})
router.delete('/delattrib/:id',passport.authenticate('jwt', {session: false}),async (req, res) => {
    const pid=req.params.id
	const X = await Project.findOne({"_id":pid})
    if(!X)
        return res.status(404).send({error: 'Project does not exist'})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id&&(""+req.user._id)!=X.consultancy_agency_id)
        return res.status(401).send('Unauthorized');
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.addattribute(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const result=[]
    
    for(var i=0;i<(X.extra_attributes).length;i++){
        if((X.extra_attributes)[i]!=req.body.attribute)
            result.push((X.extra_attributes)[i])
    }
    const updatedP=await X.updateOne({"extra_attributes":result})
    res.json({msg: 'Attribute Deleted successfully'})
})
router.get('/approved/notyet',passport.authenticate('jwt', {session: false}),async  (req, res) => {
    if(req.user.User_Category!="Admin")
        return res.status(401).send('Unauthorized');
    const Projects= await Project.find();
    const result=[]
    for(let i=0;i<Projects.length;i++){
        if(Projects[i].approved==null&&(Projects[i].need_Consultancy==false||Projects[i].consultancy_agency_id!=null))
            result.push(Projects[i])
    }
    res.json({ data: result})
    })
router.get('/approved/Yes',passport.authenticate('jwt', {session: false}),async  (req, res) => { //I think its ussless though
    const Projects= await Project.find();
    const result=[]
    for(let i=0;i<Projects.length;i++){
        if((Projects[i]).approved==true)
            result.push(Projects[i])
    }
    res.json({ data: result})
})
router.get('/approved/No',passport.authenticate('jwt', {session: false}),async  (req, res) => {
    if(req.user.User_Category!="Admin")
        return res.status(401).send('Unauthorized');
    const Projects= await Project.find();
    const result=[]
    for(let i=0;i<Projects.length;i++){
        if((Projects[i]).approved==false)
            result.push(Projects[i])
    }
    res.json({ data: result})
})

router.get('/Consultancy/needed',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    if(req.user.User_Category!="Admin"&&req.user.User_Category!="Consulting_Agent")
        return res.status(401).send('Unauthorized');
    const X=await Project.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].need_Consultancy==true&&X[i].consultancy_agency_id==null)
            result.push(X[i])
    }
    res.json({data:result})
})
router.put('/consapply/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    if(req.user.User_Category!="Consulting_Agent")
        return res.status(401).send('Unauthorized');
    const pid=req.params.id
    const consid=req.user._id
    const X= await Project.findOne({"_id":pid})
    if(X.need_Consultancy!=true||X.consultancy_agency_id!=null)
        return res.status(404).send({error: 'Sorry you cant apply to this Project'})
    const result=X.current_cons_applied_ids
    result.push(consid)
    
    await X.updateOne({"current_cons_applied_ids":result})
    res.json({msg:'Your requesnt to consult the project has been submitted'})
})
router.put('/consassign/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    const pid=req.params.id
    const consid=req.body.id
    const X= await Project.findOne({"_id":pid})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id)
        return res.status(401).send('Unauthorized');

    if(X.need_Consultancy==false||X.consultancy_agency_id!=null)
        return res.status(404).send({error: 'Sorry you cant assign A consultancy to this Project'})
    await X.updateOne({'consultancy_agency_id':consid})
    res.json({msg:'The consultancy has been assigned to your project sucessfully'})

})

router.get('/consapplied/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    const pid=req.params.id
    const X=await Project.findOne({'_id':pid})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id)
        return res.status(401).send('Unauthorized');
    const result=[]
    for(let i=0;i<X.current_cons_applied_ids.length;i++){
        const u=User.findOne({"_id":X.current_cons_applied_ids[i]})
        result.push(u)
    }
    res.json({data:result})
})
router.get('/View/avalible',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    const X=await Project.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].approved==true&&X[i].accepted_members_ids.length!=X[i].members_needed&&X[i].tasks.length!=0)
            result.push(X[i])
    }
    res.json({data:result})
})
router.get('/View/myprojects',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    const id=""+req.user._id
    const X=await Project.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].partner_id==id||(X[i].need_Consultancy==true&&X[i].consultancy_agency_id==id)||X[i].accepted_members_ids.includes(id))
            result.push(X[i])
    }
    res.json({data:result})
})
router.get('/View/myappliedprojects',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    if(req.user.User_Category!="Member")
        return res.status(401).send('Unauthorized');
    const id=""+req.user._id
    const X=await Project.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].current_members_applied_ids.includes(id))
            result.push(X[i])
    }
    res.json({data:result})
})

router.put('/declinecons/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
    const pid=req.params.id
    const consid=req.body.consid
    const X=await Project.findOne({'_id':pid})
    if(req.user.User_Category!="Admin"&&(""+req.user._id)!=X.partner_id)
        return res.status(401).send('Unauthorized');
    result=[]
    for(let i=0;i<X.current_cons_applied_ids.length;i++){
        if(X.current_cons_applied_ids[i]!=consid)
            result.push(X.current_cons_applied_ids[i])
    }
    await X.updateOne({'current_cons_applied_ids':result})
    res.json({msg:'consultancy was declined sucessfully'})
})
router.post('/certified/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{ // check 3aleh tany
    if(req.user.User_Category!="Member")
        return res.status(401).send("Unauthorized")
    const pid=req.params.id
    const mem_id=req.user._id
    //console.log(mem_id)
    const X=await Project.findOne({"_id":pid})
    const Y=await User.findOne({"_id":mem_id})
    
    if(Y.Skills.length==0)
        res.json({data:false})
    else if(!(Y.Skills.includes(X.main_skill)))
        res.json({data:false})
    else{
    for(let i=0;i<X.extra_skills.length;i++){
        if(!(Y.Skills.includes(X.extra_skills[i]))){
            res.json({data:false})
        }
    }
    res.json({data:true})
    }
})
// router.put('/declinemember/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
//     const pid=req.params.id
//     const memberid=req.body.memberid
//     const X=await Project.findOne({'_id':pid})
//     result=[]
//     for(let i=0;i<X.current_members_applied_ids.length;i++){
//         if(X.current_members_applied_ids[i]!=memberid)
//             result.push(X.current_members_applied_ids[i])
//     }
//     await X.updateOne({"current_members_applied_ids":result})
//     res.json({msg:'membere was declined sucessfully'})
// })
// router.put('/assign/:id',passport.authenticate('jwt', {session: false}),async (req,res)=>{
//     if(req.user.User_Category!="Admin")
//         return res.status(401).send('Unauthorized');
//     const pid=req.params.id
//     const memberid=req.body.memberid
//     const X= await Project.findOne({"_id":pid})
//     if(X.accepted_members_ids.length==X.members_needed)
//         return res.status(404).send({error: 'Project Team is Already Full'})

//     const result1=[]
//     const result2=X.accepted_members_ids
//     const newcount=X.current_members_count+1
//     result2.push(memberid)


//     for(let i=0;i<X.current_members_applied_ids.length;i++){   
//         if(X.current_members_applied_ids[i]!=memberid) 
//             result1.push(X.current_members_applied_ids[i])
//     }
//     await X.updateOne({"current_members_applied_ids":result1})
//     await X.updateOne({"accepted_members_ids":result2})
//     await X.updateOne({"current_members_count":newcount})
//     res.json({msg: 'Member is now Assigned to the Project'})

// })
// router.put('/apply/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{
//     const pid=req.params.id
//     const memberid=req.body.memberid
//     const X= await Project.findOne({"_id":pid})
//     if(X.accepted_members_ids.length==X.members_needed)
//         return res.status(404).send({error: 'Project Team is Already Full'})
//     const result=X.current_members_applied_ids
//     result.push(memberid)
    
//     await X.updateOne({"current_members_applied_ids":result})
//     res.json({msg:'Your requesnt to work on the project has been submitted'})
// })
// router.get('/Pending/projects',passport.authenticate('jwt', {session: false}),async(req,res)=>{ //Projects that members applied to but still not approved
//     const X=await Project.find()
//     result=[]
//     for(let i=0;i<X.length;i++){
//         if(X[i].accepted_members_ids.length<X[i].members_needed&&X[i].current_members_applied_ids.length!=0&&X[i].status=='Allocation')
//             result.push(X[i])
//     }
//     res.json({data:result})
// })
// router.get('/Pending/member',passport.authenticate('jwt', {session: false}),async(req,res)=>{ // returns for each project the members who applied to it
//     const X=await Project.find()
//     result=[]
//     for(let i=0;i<X.length;i++){
//         if(X[i].current_members_applied_ids.length!=0 && X[i].status=='Allocation')
//             result.push({Project:X[i]._id,candidates:X[i].current_members_applied_ids})
//     }
//     res.json({data:result})
// })
// router.get('/Pendingmember/:id',passport.authenticate('jwt', {session: false}),async(req,res)=>{ // returns for each project the members who applied to it
//     const pid=req.params.id
//     const X=await Project.findOne({"_id":pid})
//     if(!X)
//         return res.status(404).send({error: 'Project not found'})
//     res.json({data:X.current_members_applied_ids})
// })

module.exports = router;
 