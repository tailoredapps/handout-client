# Installation
Install handout client as a global npm package. For this to work, your user must be registered with the tailored apps phabricator instance, and you must be granted access to the handout client repo. 

```
npm i -g git+ssh://phrepo@phabricator.tailored-apps.com/diffusion/HANDOUTCLIENT/handout-client.git
```

## Global Installation
Since globally installing npm packages usually requires superuser permissions, and since your root user's ssh credentials usually won't be known to phabricator, it'll likely be helpful to enable global package installation on a per user basis. See [npm-g_nosudo](https://github.com/glenpike/npm-g_nosudo) for an easy way of achieving this.

# Usage
After installing, see `handout --help` for a list of options and usage information.

# Configuration
Handout will look in `~/.handoutrc` for default values. This file must be formatted .json style and can contain defaults for values such as `username`, `keyfile` etc. For a list of supported values see `defaults.json`.

## Example .handoutrc File
```
{
  "username": "myuser",
  "keyfile": "~/.ssh/some_id_rsa"
}
```