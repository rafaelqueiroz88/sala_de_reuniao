module Api
    module V1
        class SchedulesController < ApplicationController

            protect_from_forgery with: :null_session

            before_action :authorized

            # @get: /api/v1/schedules.json
            def index
                schedules = Schedule.search_week
                render json: ScheduleSerializer.new(schedules, options).serialized_json, status: 200
            end

            # @get: /api/v1/schedules/:slug
            def show
                schedule = Schedule.find_by(slug: params[:slug])
                render json: ScheduleSerializer.new(schedule, options).serialized_json
            end

            # @post: /api/v1/schedules
            def create
                schedule = Schedule.new(schedule_params)
                email = User.find(params[:user_id]).email
                if schedule.save
                    sender = SenderWorker.new
                    sender.perform(email)
                    render json: ScheduleSerializer.new(schedule).serialized_json
                else
                    render json: { error: schedule.errors.messages }, status: 422
                end
            end

            # @patch: /api/v1/schedules/:slug
            def update
                schedule = Schedule.find_by(slug: params[:slug])
                if schedule.user_id != params[:user_id]
                    render json: { error: "Only schedule owner can update this register" }
                else
                    if schedule.update(schedule_params)
                        render json: ScheduleSerializer.new(schedule).serialized_json
                    else
                        render json: { error: schedule.errors.messages }, status: 422
                    end
                end
            end

            # @delete: /api/v1/schedules/:slug
            def destroy
                schedule = Schedule.find_by(slug: params[:slug])
                if schedule.user_id != params[:user_id]
                    render json: { error: "Only schedule owner can delete this register" }
                else
                    if schedule.delete
                        head :no_content
                    else
                        render json: { error: schedule.errors.messages }, status: 422
                    end
                end
            end

            
            private

            def schedule_params
                params.require(:schedule).permit(:title, :description, :status, :hour, :user_id)
            end

            def options
                @options ||= { include: %i[user] }
            end
        end
    end
end