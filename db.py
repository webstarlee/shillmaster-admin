from pymongo import MongoClient
from config import MONGO_URI

client = MongoClient(MONGO_URI) # your connection string
db = client["shillmaster"]

Admin = db["admins"]
User = db["users"]
Group = db["groups"]
GroupUser = db["group_users"]
Warn = db["warns"]
Ban = db["bans"]
Pair = db["pairs"]
Project = db["projects"]
Setting = db["settings"]
Task = db["tasks"]
LeaderBoard = db["leaderboards"]