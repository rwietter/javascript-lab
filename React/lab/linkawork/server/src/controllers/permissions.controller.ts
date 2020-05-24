import DB from '@models'

class Permissions {

    //retorna as views que o usuario tem permissão
    userAuths(id: number): object {
        return DB.PermGroups.findAll({
            where: { status: 1 },
            include: {
                required: true,
                model: DB.PermGroupHasUsers,
                where: {
                    user_id: id
                }
            }
        }).then(result => {
            return result.map(item => item.name)
        }).catch(error => { throw error })
    }
}

export default Permissions