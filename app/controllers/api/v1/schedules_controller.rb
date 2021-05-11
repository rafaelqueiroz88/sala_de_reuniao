module Api
    module V1
        class SchedulesController < ApplicationController

            protect_from_forgery with: :null_session

            # before_action :authorized, except: [:index]
            before_action :authorized

            # @get: /api/v1/schedules.json
            def index
                schedules = Schedule.all
                render json: ScheduleSerializer.new(schedules).serialized_json
            end

            # @get: /api/v1/schedules/:slug
            def show
                schedule = Schedule.find_by(slug: params[:slug])
                render json: ScheduleSerializer.new(schedule).serialized_json
            end

            # @post: /api/v1/schedules
            def create
                schedule = Schedule.new(schedule_params)
                if schedule.save
                    render json: ScheduleSerializer.new(schedule).serialized_json
                else
                    render json: { error: schedule.errors.messages }, status: 422
                end
            end

            # @patch: /api/v1/schedules/:slug
            def update
                schedule = Schedule.find_by(slug: params[:slug])
                if schedule.update(schedule_params)
                    render json: ScheduleSerializer.new(schedule).serialized_json
                else
                    render json: { error: schedule.errors.messages }, status: 422
                end
            end

            # @delete: /api/v1/schedules/:slug
            def delete
                schedule = Schedule.find_by(slug: params[:slug])
                if schedule.delete
                    head :no_content
                else
                    render json: { error: schedule.errors.messages }, status: 422
                end
            end

            
            private

            def schedule_params
                params.require(:schedule).permit(:title, :description, :status, :hour, :user_id)
            end
        end
    end
end