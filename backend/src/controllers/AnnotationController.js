const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    async create (request, response) {
        const { title, notes, priority } = request.body;

        if(!notes || !title) {
            return response.status(400).json({error: "Title and notes are needed!"})
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority,
        });

        return response.json(annotationCreated);
    },

    async delete(request, response) {
        const { id } = request.params;

        const annotationDelete = await Annotations.findOneAndDelete( { _id : id });

        if (annotationDelete) {
            return response.json(annotationDelete);
        }

        return response.status(401).json({ error: "There is no register with this name!"})
    },

}