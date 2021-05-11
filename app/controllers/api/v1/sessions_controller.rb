module Api
    module V1
        class SessionsController < ApplicationController

            # use for sign in
            def create
                account = Account.where(email: params[:email]).first

                if account&.valid_password?(params[:password])
                    render json: user.as_json(only: [:email, :authentication_token]), status: :created
                else
                    head(:unauthorized)
                end
            end

            # use for sign out
            def destroy

            end
        end
    end
end