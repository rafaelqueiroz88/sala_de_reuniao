module Api
    module V1
        class BooksController < ApplicationController

            protect_from_forgery with: :null_session

            # @get: /api/v1/books.json
            def index
                books = Book.all
                render json: BooksSerializer.new(books).serialized_json
            end

            # @get: /api/v1/books/:slug
            def show
                books = Book.find_by(slug: params[:slug])
                render json: BooksSerializer.new(books).serialized_json
            end

            # @post: /api/v1/books
            def create
                book = Book.new(book_params)
                if book.save
                    render json: BooksSerializer.new(books).serialized_json
                else
                    render json: { error: book.errors.message }, status: 422
                end
            end

            # @patch: /api/v1/books/:slug
            def update
                book = Book.find_by(slug: params[:slug])
                if book.update(book_params)
                    render json: BooksSerializer.new(books).serialized_json
                else
                    render json: { error: book.errors.message }, status: 422
                end
            end

            # @delete: /api/v1/books/:slug
            def update
                book = Book.find_by(slug: params[:slug])
                if book.delete
                    head :no_content
                else
                    render json: { error: book.errors.message }, status: 422
                end
            end

            
            private

            def book_params
                params.require(:book).permit(:title, :description, :status, :hour, :user_id)
            end
        end
    end
end