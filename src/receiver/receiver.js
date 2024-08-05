function initializeReceiver() {
    const context = cast.framework.CastReceiverContext.getInstance();
    const playerManager = context.getPlayerManager();

    playerManager.setMessageInterceptor(
        cast.framework.messages.MessageType.LOAD,
        request => {
            console.log('Load request received:', request);
            return request;
        }
    );

    context.start();
    console.log('Receiver app started');
}

initializeReceiver();