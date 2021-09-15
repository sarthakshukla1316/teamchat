import Conversation from '../model/Conversation.js';



export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    try {

        let exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
        if(exist) {
            response.status(200).json('Conversation already exists');
            return;
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        response.status(200).json('New Conversation Added successfully');

    } catch(error) {
        response.status(500).json(error);
    }
}


export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [request.body.senderId, request.body.receiverId]}})
        response.status(200).json(conversation);
    } catch(error) {
        response.status(500).json(error);
    }
}