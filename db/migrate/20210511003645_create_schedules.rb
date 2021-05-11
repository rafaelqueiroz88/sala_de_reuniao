class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :title
      t.string :description
      t.string :status
      t.string :hour
      t.references :user, null: false, foreign_key: true
      t.string :slug

      t.timestamps
    end
  end
end
