const {Router} = require('express');
const router = Router();

router.get('/',(res,req)=>{
    res.send ('hello world');
})

module.exports = router;