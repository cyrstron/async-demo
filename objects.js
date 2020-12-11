const { Router } = require("express");

const storage = {};

const objectsRouter = new Router();

objectsRouter.get('/', (_req, res) => {
    const objects =  Object.keys(storage)
        .map(key => storage[key]);

    res.json(objects);
});

objectsRouter.post('/', (req, res) => {
    const value = req.body;

    if (typeof value !== 'object') {
        res.sendStatus(401);
        return;
    }

    const ids = Object.keys(storage);

    const newId = (+ids[ids.length - 1] + 1) || 0;

    value.id = newId;
    storage[newId] = value;

    res.status(201);
    res.send(value);
});


objectsRouter.get('/:id', (req, res) => {
    const {id} = req.params;

    const value = storage[id];

    if (!value) {
        res.sendStatus(404);
    } else {
        res.json(value);
    }
});

objectsRouter.put('/:id', (req, res) => {
    const value = req.body;
    const {id} = req.params;

    if (!storage[id]) {        
        res.sendStatus(404);
        return;
    } else if (typeof value !== 'object') {        
        res.sendStatus(401);
        return;
    }

    value.id = id;
    storage[id] = value;

    res.json({
        id,
        value,
    });
});

objectsRouter.patch('/:id', (req, res) => {
    const value = req.body;
    const {id} = req.params;    

    if (!storage[id]) {        
        res.sendStatus(404);
        return;
    } else if (typeof value !== 'object') {        
        res.sendStatus(401);
        return;
    }

    storage[id] = {...storage[id], ...value, id};

    res.json(storage[id]);
});

objectsRouter.delete('/:id', (req, res) => {
    const {id} = req.params;    

    if (!storage[id]) {        
        res.sendStatus(404);
        return;
    }

    delete storage[id];

    res.sendStatus(204);
});

module.exports = objectsRouter;