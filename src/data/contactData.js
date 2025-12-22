const contact_data = [
  {
    contact_id: 1,
    contact_name: "Juan Perez",
    contact_avatar:
      "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?t=st=1764678532~exp=1764682132~hmac=672b05118d45436580098309a2129b6630730f9e562dda9c58583c07cd5e69a6&w=1480",
    contact_unseen_messages: 1,
    last_message_content: "Hola, que tal?",
    last_message_state: "RECIVED", //'RECIVED', 'NOT-SEEN', 'SEEN'
    last_message_created_at: new Date(),
    messages: [
      {
        message_id: 1,
        message_content: "Hola que tal?",
        message_state: "SEEN",
        message_create_at: new Date(),
        send_by_me: false,
      },
    ],
  },
  {
    contact_id: 2,
    contact_name: "Maria Rodriguez",
    contact_avatar:
      "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671136.jpg?t=st=1764678599~exp=1764682199~hmac=746226b023700505c508a4b7328b11d35b490c2e080bcdf9a3b724d17b368a7a&w=1480",
    contact_unseen_messages: 0,
    last_message_content: "Todo bien?",
    last_message_state: "SEEN", //'RECIVED', 'NOT-SEEN', 'SEEN'
    last_message_created_at: new Date(),
    messages: [
      {
        message_id: 2,
        message_content: "Todo bien?",
        message_state: "SEEN",
        message_create_at: new Date(),
        send_by_me: false,
      },
    ],
  },
];

export default contact_data;
