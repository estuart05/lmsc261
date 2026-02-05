const activities = ["watch tadpoles","eat flies","hop around","go swim"]
print( "Your activity is to " + (activities[ (prompt("Pick a number from 1-4") - 1) % 4]) )