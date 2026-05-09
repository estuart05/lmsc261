# turtle types
# input->turtle selection
# output -> num food needed

import tkinter as tk
root = tk.Tk()
root.geometry("1200x300")
root.config(background="#598E44")

turtle = None

def snapper_callb():
    global turtle
    turtle = "Snapper"
    print("snapper called")
    turtle_label.config(text=turtle)

def sea_callb():
    global turtle
    turtle = "Sea"
    print("sea called")
    turtle_label.config(text=turtle)

def painted_callb():
    global turtle
    turtle = "Painted"
    print("painted called")
    turtle_label.config(text=turtle)


snapper_button = tk.Button(root, text="Snapping Turtle", command=snapper_callb)
snapper_button.pack()

sea_button = tk.Button(root, text="Sea Turtle", command=sea_callb)
sea_button.pack()

painted_button = tk.Button(root, text="Painted Turtle", command=painted_callb)
painted_button.pack()

turtle_label = tk.Label(root)
turtle_label.pack()


root.mainloop()