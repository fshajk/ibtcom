from datetime import datetime

import sqlalchemy

from data.db_session import SqlAlchemyBase


class Mail(SqlAlchemyBase):
    __tablename__ = 'mail'
    id = sqlalchemy.Column(sqlalchemy.Integer, autoincrement=True, primary_key=True, nullable=False)
    name = sqlalchemy.Column(sqlalchemy.String, nullable=False)
    phone = sqlalchemy.Column(sqlalchemy.String, nullable=False)
    email = sqlalchemy.Column(sqlalchemy.String, nullable=False)
    comment = sqlalchemy.Column(sqlalchemy.String, default="")
    submission_reason = sqlalchemy.Column(sqlalchemy.String, default="")
    time = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now)

    def __repr__(self):
        return f'<Mail> {self.time} {self.name} {self.phone} {self.email} {self.comment}'
