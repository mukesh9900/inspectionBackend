const Inspection = require('./../models/Inspection')

exports.createInspection = async(req, res)=>{
    console.log('creating new Inspection')
    const inspection = new Inspection({
        ...req.body,
        inspectionDate:new Date().getFullYear()+"/"+new Date().getMonth()+"/"+new Date().getDate()
    })
    await inspection.save();
    console.log('Inspection created');
    return res.status(200).json({
        msg:'Process Completed '
    })
}

exports.getAllInspection = async(req, res)=>{
    const inspections = await Inspection.find({});
    res.send(inspections);
}

exports.updateInspection = async(req, res)=>{
    console.log("request body is ", req.body);
    await Inspection.findByIdAndUpdate(req.body._id, req.body).exec();
    res.json({msg:'Inspection Updated Successfully'})
}

exports.deleteInspection = async(req, res)=>{
    await Inspection.findByIdAndDelete(req.params.id);
}