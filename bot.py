# This example requires the 'members' privileged intents

import discord
from discord.ext import commands
import random
import requests

description = '''An example bot to showcase the discord.ext.commands extension
module.
There are a number of utility commands being showcased here.'''

intents = discord.Intents.default()
intents.members = True

bot = commands.Bot(command_prefix='$', description=description, intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user} (ID: {bot.user.id})')
    print('------')

@bot.command()
async def add(ctx, left: int, right: int):
    """Adds two numbers together."""
    await ctx.send(left + right)

@bot.command(description='For when you wanna settle the score some other way')
async def choose(ctx, *choices: str):
    """Chooses between multiple choices."""
    await ctx.send(random.choice(choices))

@bot.command()
async def repeat(ctx):
    values = {
        "type": "product",
        "product_title": "Awesome t-shirt",
        "style_id": "next-level-3600",
        "variant_ids": [
            "black"
        ],
        "decorations": {
            "front": "https://www.aqueon.com/-/media/Images/Aqueon-NA/US/Assets/Articles/Origin%20of%20Betta/betta-fins-large_turning-teal2.jpg"
        }
    }
    
    headers = {
        'Content-Type': 'application/json',
        FA18ABC0-C5E7-98AA-FB61DCF0A5E45E76
        'Authorization': 'Bearer ec6eccc96dcdf9b7d58ba06983de311e'
    }
    url = 'https://private-ec08c-representfulfilmentapi.apiary-mock.com'
    request = requests.post(url, json=values, headers=headers)

   
    print (request)

@bot.command()
async def joined(ctx, member: discord.Member):
    """Says when a member joined."""
    await ctx.send(f'{member.name} joined in {member.joined_at}')


bot.run('ODcxMDE1NDI4OTQ2ODEyOTI4.YQVKVA.xo6kJi51QBb9ZkKc8sUqzrRVXmI')