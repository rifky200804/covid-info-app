function NumberFormat(number) {
    if (number === undefined || number === null) {
        return 0;
      }
      return number.toLocaleString('id-ID');
}

export default NumberFormat