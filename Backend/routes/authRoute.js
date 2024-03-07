
const express = require("express");
const router = express.Router();
const {createUser,loginUserCtrl,getalluser,getauser, getauserdelete,getauserupdated,ManageAddress} = require("../controller/userCtrl");
const {ProductAdd,DisplayProduct,DeleteProduct, BrandController,CouponControler} = require("../controller/AdminControler");
router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all_users', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
router.post('/ProdoctAdd', ProductAdd);
router.post('/DisplayProduct', DisplayProduct);
router.delete('/DeleteProduct/:id', DeleteProduct);
router.post('/ManagedlyAddress', ManageAddress);
router.post('/Brandctrl', BrandController);
router.post('/Couponctrl', CouponControler);
module.exports = router;

