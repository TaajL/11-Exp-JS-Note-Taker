const fs = require('fs');
const express = require('express');
const { json } = require('body-parser');
const app = express();
//get Route to retrieve all notes from data base 
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(json.parse(data));
    });
});
// GET route to retrieve a single note by its ID
app.get('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = json.parse(data);
        const note = notes[Number(req.params.id)];
        if (!note) return res.status(404).send('Note not found');
        res.json(note);
    });
});
