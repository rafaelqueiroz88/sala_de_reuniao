class NewScheduleWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(args)
        schedule = Schedule.new(args)
        if schedule.save
            true
        else
            false
        end
    end
end