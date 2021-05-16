module Api
    module V1
        class UsersController < ApplicationController

            protect_from_forgery with: :null_session

            before_action :authorized, except: [:create, :login]

            # @get: /api/v1/users.json
            def index
                users = User.all
                render json: UserSerializer.new(users, options).serialized_json
            end

            # @get: /api/v1/users/:slug
            def show
                user = User.find_by(slug: params[:slug])
                render json: UserSerializer.new(user, options).serialized_json
            end

            # @post: /api/v1/login
            def login
                @user = User.find_by(email: params[:email])

                if @user && @user.authenticate(params[:password])
                    token = encode_token({user_id: @user.id})
                    render json: {user: @user, token: token}, status: 200
                else
                    render json: { error: "Invalid e-mail or password" }, status: 208
                end
            end

            # @get: /api/v1/auto_login
            def auto_login
                render json: @user
            end

            # @post: /api/v1/users/:slug
            def create
                @user = User.new(user_params)
                if @user.valid?
                    if @user.save
                        token = encode_token({user_id: @user.id})
                        render json: { user: @user, token: token }, status: 200
                    else
                        render json: { error: @user.errors.messages }, status: 422
                    end                    
                else
                    render json: { error: @user.errors.messages }
                end
            end

            # @delete: /api/v1/users/:slug
            def destroy
                user = User.find_by(slug: params[:slug])
                if user.delete
                    head :no_content
                else
                    render json: { error: user.errors.message }, status: 422
                end
            end

            private

            def user_params
                params.require(:user).permit(:name, :email, :password, :occupation)
            end

            def options
                @options ||= { include: %i[schedules] }
            end
        end
    end
end