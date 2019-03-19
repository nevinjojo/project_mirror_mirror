# Project_Mirror_Mirror

This is a 'smart-mirror project' that I am working on during my free-time.


## Smart Mirror Features
- [iCal integration](https://github.com/bitte-ein-bit/MMM-iCloud-Client)
- Daily news

## Installation
We use an Ansible playbook (`pi.yml`) to configure Raspbian for us. By default
the playbook uses the `magicmirror` group, so make sure that the Pi's
hostname/IP is placed under that group in the inventory file. For example, since
Raspbian's default hostname is `raspberrypi`:

```bash
# /etc/ansible/hosts

[magicmirror]
raspberrypi
```

And you can then run the playbook to configure the Pi:
```bash
ansible-playbook pi.yml -k
```

For now we're authenticating using a password rather than SSH cert, hence the
`-k` flag (which will prompt you for the password of the `pi` user, `raspberry`
by default). It's currently running in server mode, so visit `http://raspberry`
in a browser to see the interface.


## Research & Inspiration
- [smart-mirror.io](https://docs.smart-mirror.io/docs/hardware.html
)
- [medium article](https://medium.com/@maxbraun/my-bathroom-mirror-is-smarter-than-yours-94b21c6671ba
)
- [DIY smart mirror](https://howchoo.com/project/mzu3ndm2otu/building-a-voice-controlled-smart-mirror-with-raspberry-pi-and-jasper
)
- [Voice controlled smart-mirror](https://howchoo.com/project/mzu3ndm2otu/building-a-voice-controlled-smart-mirror-with-raspberry-pi-and-jasper
)

## To do
- [x] Research on Hardware, software, implementation cost :+1:
- [ ] Buy a cheap Monitor, Two-way mirror, Raspberry Pi and Mirror frames
- [ ] Install Raspbian and dependencies
- [ ] Configure Pi, Sound & Speech recognition
- [ ] Configure the smart mirror
- [ ] Run the smart mirror
- [ ] Fix bugs & handle troubleshooting
