import tkinter as tk
from tkinter import font

root = tk.Tk()
root.geometry("300x300")
root.config(background="#000000")

sansFont = ("Comic Sans MS", 16)
dtFont = ("Determination Mono", 16)
kirbyFont = ("Kirby Classic", 20)

# def get_my_text():
#     entry_text = entry.get()
#     label.config(text=entry_text)
#     label.config(font = ("Courier New", 16))
#     entry.delete(0,'end')

entry_text = None

def get_label_text():
    global entry_text
    entry_text = entry.get()
    label.config(font = dtFont)
    entry.delete(0,'end')

label1 = tk.Label(root, text="Hello what's your name?")
label1.pack()

entry_name = tk.Entry(root)
entry_name.pack()


button = tk.Button(root, text="Submit", command=get_label_text)
button.pack()

label = tk.Label(root, text="Hello there, "+entry_text+"! Welcome... etcetc...", font = dtFont)
label.pack()

root.mainloop() 