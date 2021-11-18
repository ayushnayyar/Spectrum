const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen(app.get('port'), () => {
    console.log(
        `🚀 Server running at http://localhost:${port} in %s mode`,
        app.get('port'),
        app.get('env')
    );
});
