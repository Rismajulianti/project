var express = require('express');
var router = express.Router();
const moment = require('moment');

const db = require('../bin/db');

const sess = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
  return next();
}

router.get('/', sess, (req, res, next) => {
  db.query('SELECT * FROM sppsiswa', (error, results, fields) => {
    if (error) throw error;
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Doucmentasi</title>
        <!--Zona Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        <!-- Zona JQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- FontAwesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
        <!-- Zona CSS -->
        <link rel="stylesheet" href="assets/CSS/style.css">
        <link rel="stylesheet" href="assets/CSS/ngambil_data.css">
        <link rel="stylesheet" href="assets/CSS/table_spp.css">
        <!-- Zona Java Script -->
        <script src="assets/JS/mainspp.js"></script>
    </head>

    <body>
        <section id="one-page">
            <div class="container">
                <!-- Title -->
                <div class="row">
                    <h1 class="text-light">Pembayaran SPP SMK JAKARTA PUSAT 1</h1>
                </div>

                <div class="row mt-4">
                    <!-- insertion section -->
                    <div class="col-lg-5" id="insertion_section">
                        <form class="form-group justify-content-center">
                            <div class="row" id="name-section">
                                <label for="bookName" class="text-light">Nama</label>
                                <input type="text" class="form-control" id="bookName">
                            </div>
                            <div class="row" id="author-section">
                                <label for="authorName" class="text-light">Kelas</label>
                                <input type="text" class="form-control" id="authorName">
                            </div>
                            <div class="row" id="publisher-section">
                                <label for="publisherName" class="text-light">Angs.PSB</label>
                                <input type="number" class="form-control" id="publisherName">
                            </div>
                            <div class="row" id="two-section">
                                <div class="col-6">
                                    <label for="numberPage" class="text-light">TGL.Bayar</label>
                                    <input type="date" class="form-control" id="numberPage">
                                </div>
                                <div class="col-6">
                                    <label for="serialNumber" class="text-light">TOTAL</label>
                                    <input type="number" class="form-control" id="serialNumber">
                                </div>
                            </div>
                            <div class="add-button mt-4">
                                <button type="button" class="btn btn-danger btn-block" id="add">TAMBAHKAN MURID</button>
                            </div>
                            </from>
                    </div>

                    <!-- Book List -->
                    <div class="col-lg-7" id="book_list">
                        <table class="table table-borderless table-striped mt-3 ">
                            <thead>
                                <tr>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Kelas</th>
                                    <th scope="col">Angs.PSB</th>
                                    <th scope="col">TGL.Bayar</th>
                                    <th scope="col">TOTAL</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="tabs">
                                <tr class="tab">
                                </tr>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    </body>

    </html>
    res.render('index', { data: results, moment });
  })
});

router.get('/login', (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  }

  res.render('login', { title: 'SPP' });
});


module.exports = router;
