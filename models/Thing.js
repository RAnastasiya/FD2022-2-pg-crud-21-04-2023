class Thing{
    static client = null;
    static tableName = 'things';
    static attributes = {
        description: 'string'
    }

    static async create(values){
        try {
            const result = await this.client.query(`INSERT INTO ${this.tableName} (description) VALUES (${values})`);
            console.log(result)
            return result
        } catch (error) {
            return error
        }
    }
    static async findAll(){
        try {
            const result = await this.client.query(`SELECT * FROM ${this.tableName}`);
            console.log(result)
            return result
        } catch (error) {
            return error
        }
    }
    static async findByPk(pk){
        try {
            const result = await this.client.query(`SELECT * FROM ${this.tableName} WHERE id=${pk}`);
            console.log(result)
            return result
        } catch (error) {
            return error
        }
    }
    static async updateByPk(){
        try {
            
        } catch (error) {
            return error
        }
    }
    static async deleteByPk(){
        try {
            
        } catch (error) {
            return error
        }
    }
}

module.exports = Thing;