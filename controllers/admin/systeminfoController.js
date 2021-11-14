const util = require("util");
const exec = util.promisify(require("child_process").exec);

class SystemInfoController {
    static cmd = async (cmd) => {
        try {
            const { stdout, stderr } = await exec(cmd);
            if (stderr) {
                console.log(stderr);
                return "Error";
            } else {
                return stdout.replace(/\r?\n|\r/g, " ");
            }
        } catch (error) {
            console.log(error);
            return "Error";
        }
    };

    static systemInfo = async (req, res) => {
        const totalDiskSpace = await this.cmd(
            "df -h / | tail -1 | awk '{print $2}'"
        );
        const usedDiskSpace = await this.cmd(
            "df -h / | tail -1 | awk '{print $3}'"
        );
        const freeDiskSpace = await this.cmd(
            "df -h / | tail -1 | awk '{print $4}'"
        );
        const usedDiskSpaceP = await this.cmd(
            "df -h / | tail -1 | awk '{print $5}'"
        );
        const cpuCores = await this.cmd("nproc");
        const uptime = await this.cmd(`uptime | awk -F'( |,|:)+' '{
                d=h=m=0;
                if ($7=="min")
                    m=$6;
                else {
                    if ($7~/^day/) { d=$6; h=$8; m=$9}
                    else {h=$6;m=$7}
                    }
                }
                {
                    print d+0,"days,",h+0,"hours,",m+0,"minutes."
                }'`);
        const totalRam = await this.cmd(
            "free -m | grep Mem | awk '{print $2 / 1000}'"
        );
        const freeRam = await this.cmd(
            "free -m | grep Mem | awk '{print $4 / 1000}'"
        );
        const buffRam = await this.cmd(
            "free -m | grep Mem | awk '{print $6 / 1000}'"
        );
        const totalRamF = parseFloat(totalRam).toFixed(2) + " GB";
        const usedRamF = (totalRam - freeRam - buffRam).toFixed(2) + " GB";
        const freeRamF =
            (parseFloat(totalRam) - (totalRam - freeRam - buffRam)).toFixed(2) +
            " GB";
        const publicIPv4tmp = await this.cmd(
            "dig -4 TXT +short o-o.myaddr.l.google.com @ns1.google.com"
        );
        const publicIPv4 = publicIPv4tmp
            .replace('"', "")
            .replace('"', "")
            .replace(" ", "");
        const publicIPv6tmp = await this.cmd(
            "dig -6 TXT +short o-o.myaddr.l.google.com @ns1.google.com"
        );
        const publicIPv6 = publicIPv6tmp
            .replace('"', "")
            .replace('"', "")
            .replace(" ", "");
        const user = await this.cmd("echo $USER");
        const userF = user.replace(" ", "");
        const ssh = `ssh ${userF}@${publicIPv4}`;
        const sshwithkey = `ssh -i /path/key.pem ${userF}@${publicIPv4}`;
        const scplts = `scp /path/file.ext ${userF}@${publicIPv4}`;
        const scpstl = `scp ${userF}@${publicIPv4}:/path /path/file.ext`;
        const scpltswithkey = `scp -i /path/key.pem /path/file.ext ${userF}@${publicIPv4}`;
        const scpstlwithkey = `scp -i /path/key.pem ${userF}@${publicIPv4}:/path /path/file.ext`;
        const data = {
            totaldisk: totalDiskSpace.replace("G", "") + " GB",
            useddisk: usedDiskSpace.replace("G", "") + " GB",
            freedisk: freeDiskSpace.replace("G", "") + " GB",
            useddisk_p: usedDiskSpaceP,
            cpu_cores: cpuCores,
            uptime,
            totalram: totalRamF,
            freeram: freeRamF,
            usedram: usedRamF,
            publicIPv4,
            publicIPv6,
            ssh,
            sshwithkey,
            scplts,
            scpstl,
            scpltswithkey,
            scpstlwithkey,
        };
        return res.render("admin/systeminfo.ejs", data);
    };
}

module.exports = SystemInfoController;
