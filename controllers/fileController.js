import File from '../schem/File.js'


class FileController {

    async createFile(req, res) {
        try {
            const {
                fileData
            } = req.body
            const file = await File.create({
                fileData
            });
            res.json(file)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllFile(req, res) {
        try {
            const file = await File.find();
            return res.json(file);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateFile(req, res) {
        try {
            const {id: _id} = req.params
            // const {} = req.body
            const newFile = {
                _id
              }
            File.findByIdAndUpdate(
                _id,
                newFile,
                (err, updatedFile) => {
                  if (err) {
                    res.json({
                      newFile,
                      success: false,
                      msg: 'Failed to update file'
                    })
                  } else {
                    res.json({ newFile, success: true })
                  }
                })
        } catch (e) {
            res.status(500).json(e);
        }
    }
    
    async deleteFile(req, res) {
        try {
            const {id} = req.params
            // console.log(id);
            const file = await File.findByIdAndDelete(id)
            return res.json(file)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new FileController()