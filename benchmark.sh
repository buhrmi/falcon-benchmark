mycurl() {
    curl -s "http://localhost:5100/" > /dev/null
}
export -f mycurl

START=$(date +%s)
seq 500 | parallel -j0 mycurl
END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Finished in $DIFF seconds"