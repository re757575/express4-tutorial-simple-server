var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

router.get('/shell-script', function(req, res) {
    if (!req.session.user) return res.redirect('/login');
    res.render('shell-script', {});
});

router.post('/shell-script', function(req, res) {
    if (!req.session.user) return res.redirect('/login');

    if (!req.body && !req.body.command) return res.redirect('/');

    console.log(req.body);

    var clear = 'clear && ';
    var command = req.body.command;//'docker ps -a';

    execute( clear + command,function(result) {
        var resultMsg = '\nexecute command: ' + command +'\nresult:\n' + result;
        console.log(resultMsg);

        result.replace('[H[2J','');
        result.replace(' ','</br>');

        res.render('shell-script', { result: result.replace('[H[2J','') , command: command });
    });
});

module.exports = router;

function execute(command, callback) {
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};
