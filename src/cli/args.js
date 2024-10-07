const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((acc, arg, index, arr) => {
    const nameVal = arr[index + 1];
    if (nameVal && arg.startsWith('--')) {
      const transformedKey = arg.slice(2);
      acc.push(`${transformedKey} is ${nameVal}`);
    }
    return acc;
  }, []);
  console.log(result.join(', '));
};

parseArgs();