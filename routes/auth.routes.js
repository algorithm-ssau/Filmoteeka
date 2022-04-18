const {Router} = require('express')
const router = Router()
const User = require('../models/user')

router.post('/register', async (req, res) => {
    try {
        const {login, password} = req.body
        
        const candidate = await User.findOne({login})
        if (candidate) {
            return res.status(400).json({
                message: 'Пользователь с таким ником уже существует'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Что то пошло не так'
        })
    }
})
    
router.post('/login', async (req,res) => {
    const {login, password} = req.body
        
        const candidate = await User.findOne({login})
        if (candidate) {
            console.log("Пользователь найден")
        }
})
    
module.exports = router