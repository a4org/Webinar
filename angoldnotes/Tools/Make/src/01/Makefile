blah: blah.o
	cc blah.o -o blah                       # Runs third

blah.o: blah.c
	cc -c blah.c -o blah.o                  # Runs second

blah.c:
	echo "int main() {return 0; }" > blah.c # Runs first

# Make is given blah as the target, so it first searches for this target
# blah requires blah.o, so make searches for the blah.o target
# blah.o requires blah.c, so make searches for the blah.c target
# blah.c has no dependencies, so the echo command is run
# The cc -c command is then run, because all of the blah.o dependencies are finished
# The top cc command is run, because all the blah dependencies are finished
# That's it: blah is a compiled c program

