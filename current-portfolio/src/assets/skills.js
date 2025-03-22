import reactpic from "../assets/react.png";
import phpic from "../assets/php .png";
import Javascriptpic from "../assets/java-script.png";
import windows_server from "../assets/windows-server.jpg";
import packet_tracer from "../assets/packet-tracer.jpg";
import huawei from "../assets/huawei.jpg";
import burp from "../assets/burpsuite.jpg";
import OWASP from "../assets/owasp.jpg";
import SQL_DB from "../assets/sql.jpg";
import valentine from "../assets/valentine.png";
import form from "../assets/form.png";
import number_game from "../assets/number-game.png";


export const dev_skills = [
    { skill_name: "PHP", skill_image: phpic, skill_description: "" },
    { skill_name: "JavaScript", skill_image: Javascriptpic, skill_description: "" },
    { skill_name: "SQL Database", skill_image:SQL_DB, skill_description: "" },
    { skill_name: "React JS", skill_image: reactpic, skill_description: "" }
];

export const networking_skills = [
    { skill_name: "Packet Tracer", skill_image: packet_tracer },
    { skill_name: "Huawei", skill_image: huawei },
    { skill_name: "Windows Server", skill_image: windows_server },
    { skill_name: "Burp Suite", skill_image: burp },
    { skill_name: "OWASP ZAP", skill_image: OWASP },
];

export const projects=[
    {project_name:"Number game",project_image:number_game,project_link:"https://victoroduorke.github.io/numberGame/", status:false},
    {project_name:"React Register Form",project_image:form, project_link:"https://victoroduorke.github.io/login-page/", status:false},
    {project_name:"Valentine",project_image:valentine, project_link:"https://victoroduorke.github.io/valentine", status:false},
    {project_name:"Docement Scanner",project_image:"", project_link:"", status:true}
]