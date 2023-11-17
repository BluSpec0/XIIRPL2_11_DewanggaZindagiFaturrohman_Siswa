const mongoose = require('mongoose')

const siswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },  
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
        unique: false
    }, 
    nis: {
        type: Number,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isikan gender'],
        unique: false
    },  
    presensi: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah presensi'],
        unique: false
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Siswa', siswaSchema)