# etheasy: Ethereum development made easy

`etheasy` is a Rust-powered 🦀, comprehensive, and easy-to-use toolkit designed to support Ethereum developers. Its lightweight and flexible design, combined with its speed, simplifies and accelerates the development process by providing an extensive range of common operations for EVM-related development.

The project is built with the following stack:

- **Rust:** Blazingly fast programming language.
- **Pest:** General purpose parser, for Rust.
- **Alloy:** Library with core types for Rust-Ethereum.
- **Trunk:** WASM web application bundler, for Rust.
- **Yew:** Front-end framework to build web apps with WASM, for Rust.
- **Tailwind:** Framework for CSS styles.

## Key Features

### 📟 Built around U256

First-class support for U256, the fundamental numerical type in EVM, to perform arithmetic and bitwise operations accurately. Numbers can be input as in decimal, hexadecimal, or binary form. It also supports scientific notation (rounded to an integer). Finally, the `max_uint` constant is available to represent the maximum value of a U256.

```rs
1.2e18                                    // scientific notation input (1200000)
0b10110101                                // binary input (181)
0x1234abcd                                // hexadecimal input (305441741)
max_uint                                  // maximum U256 value (0xf...f)
```

### 🔢 Mathematical Operations

Offers addition, subtraction, multiplication, division, modulo, power, and bit-shifting, using `U256` to precisely handle large numbers.

```rs
0x11 + 0xAA                               // addition (187)
0b11 - 0b10                               // subtraction (1)
2 * 3                                     // multiplication (6)
10 / 3                                    // division (3)
10 % 3                                    // modulo (1)
2 ** 8                                    // power (256)
sqrt(25)                                  // square root (5)
root(125, 3)                              // root (5)
5 >> 1                                    // right shift (2)
5 << 1                                    // left shift (10)
```

By default, all operations are checked for over/underflows. However, you can disable this feature by using the `unchecked` keyword.

```rs
unchecked(0 - 1)                          // unchecked operation (max_uint)
unchecked(format_units(2**256, 4))        // composed unchecked operation ('0.0000')
```

### 🛠️ EVM-Related Operations

Support common EVM-related operations to work with addresses, calldata, hashing, abi encoding, function selectors or base64 encoding.

```rs
address(0)                                // zero address (0x0000000000000000000000000000000000000000)
checksum(0xd8da6bf2..7aa96045)            // address checksum (0xd8dA6BF2..7aA96045)
selector("transfer(address,uint256)")     // 4-bytes function selector (0xa9059cbb)
keccak256("hello world")                  // keccak hash (0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad)
b64_encode("hello world")                 // base64 encode ('aGVsbG8gd29ybGQ=')
b64_decode("aGVsbG8gd29ybGQ=")            // base64 decode ('hello world')

abi_encode(                               // abi encode without function selector:
  "transfer(address, uint256)",           //   0x000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa9604
  "0xd8da6bf2..7aa96045, 1")              //   50000000000000000000000000000000000000000000000000000000000000001

abi_encode_with_selector(                 // abi encode with the function selector:
  "transfer(address, uint256)",           //   0xa9059cbb000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa
  "0xd8da6bf2..7aa96045, 1")              //   960450000000000000000000000000000000000000000000000000000000000000001

abi_decode(                               // abi decode (uses selector of the calldata):
  "transfer(address, uint256)",           //   fn_selector: "0xa9059cbb",
  "0xa9059cbb000000000000..0000001"       //   address: "0xd8dA6BF2..7aA96045",
)                                         //   uint256: "0x1",

debug("0xa9059cbb000000000000..0000001")  // pretty prints calldata in 32-byte words + function selector:
                                          //   a9059cbb
                                          //   000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045
                                          //   0000000000000000000000000000000000000000000000000000000000000001
```

### 🦄 UniswapV3 Helper Functions

Provides helper functions to easily work with UniswapV3 positions, such as converting tick to price, calculating liquidity, etc.

```rs
get_tick_from_sqrt_ratio(4295128739)      // get tick from sqrt ratio ("-887272")
get_sqrt_ratio_from_tick(-887272)         // get tick from sqrt ratio ("4295128739")

get_price_from_tick(                      // get price from tick ("1 token1 : 1540.921115 token0")
    202919,         // tick
    false,          // in_token1
    6,              // token0_decimals
    18              // token1_decimals
)

get_liquidity_from_amount1(               // get liquidity from amount1 (44928398530981124971653892)
    1e6,            // amount1
    5317859378      // sqrt_price_x96
    4295128739      // sqrt_pa_x96
    6178424788      // sqrt_pb_x96
)

get_amount0_from_liquidity(               // get amount0 from liquidity ()
    4492...3892,    // liquidity
    5317859378      // sqrt_price_x96
    4295128739      // sqrt_pa_x96
    6178424788      // sqrt_pb_x96
)

get_amount1_from_liquidity(               // get amount1 from liquidity ()
    4492...3892,    // liquidity
    5317859378      // sqrt_price_x96
    4295128739      // sqrt_pa_x96
    6178424788      // sqrt_pb_x96
)
```

### ✏️ String Operations

Simplify common string operations, including case conversions or character counting.

```rs
upper("hello")                            // upper case ('HELLO')
lower("WORLD")                            // lower case ('world')
len("foo bar")                            // count all characters (7)
count("foo bar", "o")                     // count input character (2)
```

### 🧮 Conversions

Effortlessly convert between different units relevant to the EVM, such as gas or time units.

```rs
1 ether to gwei                           // gas unit conversion (1000000000)
1 year to seconds                         // time unit conversion (31536000)
```

### 🕓 Miscellaneous

Perform other operations, such as getting the current timestamp, a specific unix timestamp, or formatting units.

```rs
now                                       // current timestamp
unix(2023,12,31,23,59,59)                 // unix timestamp, comma separated (1704067199)
unix(2023-12-31T23:59:59)                 // unix timestamp, YYYY-MM-DDTHH:mm:ss (1704067199)
unix(1704067199)                          // formatted timestamp from unix, ('2023-12-31 23:59:59')
unix(1704067199, "%Y-%m-%dT%H:%M:%S")     // custom formatted timestamp from unix, ('2023-12-31T23:59:59')
                                          // ref: https://docs.rs/chrono/latest/chrono/format/strftime/index.html

format_ether(1e18)                        // format with 18 decimal places ('1.000000000000000000')
format_uints(123456, 4)                   // format with n decimal places ('12.3456')
```

## Development

To run the project locally:

1. Clone the repo with:

   ```
   # with ssh key
   git clone git@github.com:0xrusowsky/etheasy.git

   # otherwise
   git clone https://github.com/0xrusowsky/etheasy.git
   ```

2. Install the dependencies by running the following command:
   ```
   cargo build
   ```
3. After applying your changes, build and run the development server with:
   ```
   trunk serve --open
   ```

## Contribute

Any contribution is welcome! Feel free to open a PR.

## Acknowledgements

`etheasy` took inspiration from:

- [qubit](https://github.com/abhimanyu003/qubit/tree/main) a calculator built with the same stack.
- [dethtools](https://github.com/dethcrypto/dethtools) a flexible toolset for Ethereum developers.
- [swiss-knife](https://github.com/swiss-knife-xyz/swiss-knife) a flexible toolset for Ethereum developers.

## License

`etheasy` is licensed under the [MIT License](LICENSE).
