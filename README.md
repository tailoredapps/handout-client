# Installation
```
npm install -g handout-client
```

# Usage
After installing, see `handout --help` for a list of options and usage information. Someone with the appropriate privileges will have to create an account and set up permissions before you can use the client to do anything useful. It'll propably be best to consult your friendly neighbourhood sysadmin.

# Configuration
Handout will look in `~/.handoutrc` for default values. This file must be formatted in .json style and can contain defaults for values such as `username`, `keyfile` etc. Using this file you can set default values for pretty much all of the supported commandline options.

## Example .handoutrc File
```
{
  "username": "myuser",
  "keyfile": "~/.ssh/some_id_rsa",
  "debug": true
}
```