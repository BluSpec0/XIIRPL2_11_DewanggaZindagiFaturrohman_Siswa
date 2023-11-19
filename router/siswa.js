const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')

router.get('/semuasiswa', siswacontroller.index)

router.get('/siswa/:id', siswacontroller.show)

router.post('/tambahsiswa', siswacontroller.store)

router.put('/ubahsiswa/:id', siswacontroller.update)

router.delete('/hapussiswa/:id', siswacontroller.delete)    

module.exports  = router