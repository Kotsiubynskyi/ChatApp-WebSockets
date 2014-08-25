package edu.nau.chat;

import javax.websocket.EndpointConfig;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Set;

@ServerEndpoint("/chatMe")
public class SocketEndpoint {

    @OnOpen
    public void onOpen(Session session, EndpointConfig endpointConfig) {
        try {
            session.getBasicRemote().sendText("Connected to server successfully. Start chatting.\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnMessage
    public void onMessage(Session session, String msg) throws IOException {
        Set<Session> sessionSet = session.getOpenSessions();
        for (Session userSession : sessionSet) {
            userSession.getBasicRemote().sendText(msg);
        }
    }
}
