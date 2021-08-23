class SenderWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(arg)

        subject = "Horário agendado com sucesso"
        message = "Seu horário foi agendado! Para ver acesse a sua agenda."

        Pony.mail(
            :to => arg, 
            :via => :smtp, 
            :subject => subject, 
            :body => message, 
            :via_options => {
                address: 'smtp.gmail.com',
                port: '587',
                user_name: 'rafael.qdc88@gmail.com',
                password: 'ExiaGundam00',
                authentication: :plain,
                domain: 'mail.google.com'
            }
        )
    end
end