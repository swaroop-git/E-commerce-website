const rolesModel = require('../models/roleModel')

const addRole = async (req, res) => {

    const roles = req.body.role
    const permissions = req.body.permissions

    const newRole = new rolesModel({ roles, permissions })
    const isSaved = await newRole.save()

    if (isSaved) {
        return res.send({ code: 200, message: 'Role added successfully' })
    } else {
        return res.send({ code: 500, message: 'server Err' })
    }

}

const deleteRole = (req, res) => {
    return res.send({ code: 200, message: 'Role deleted successfully' })
}

module.exports = {
    addRole,
    deleteRole
}