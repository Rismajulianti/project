const express = require('express');
const router = express.Router();

const db = require('../bin/db');

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    db.query('SELECT * FROM user WHERE user = ? AND pass = ?', [username, password], (err, results, fields) => {
      if (results.length > 0) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect('/');
      } else {
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

router.get('/bayar-spp', (req, res, next) => res.redirect('/'));

router.post('/bayar-spp', (req, res, next) => {
  const { nama_siswa, kelas, bulan_spp, jumlah } = req.body;
  const { username, loggedIn } = req.session;

  if (!loggedIn && !username) {
    res.redirect('/login');
    res.status(403).json({ error: 'Forbidden' })
  }

  if (nama_siswa && kelas && bulan_spp && jumlah) {
    db.query('INSERT INTO sppsiswa SET ?', {
      nama_siswa,
      kelas,
      bulan_spp,
      jumlah: jumlah,
      tanggal_bayar: new Date(),
      petugas: username
    }, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/')
    })
  } else {
    res.redirect('/')
  }
})


router.post('/delete-data-spp', (req, res, next) => {
  const { id_kuintasi } = req.body;
  console.log('TCL: id_kuintasi', id_kuintasi);
  const { loggedIn } = req.session;

  if (!loggedIn) {
    res.redirect('/login');
    res.status(403).json({ error: 'Forbidden' })
  }

  if (id_kuintasi) {
    console.log('TCL: id_kuintasi', id_kuintasi);
    db.query('DELETE FROM sppsiswa WHERE ?', { id_kuintasi }, (error, results, fields) => {
      console.log('TCL: error, results, fields', error, results, fields);
      if (error) throw error;
      res.redirect('/')
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router;
