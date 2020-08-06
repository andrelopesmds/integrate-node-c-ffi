import http from 'k6/http';
import { check, sleep } from 'k6';


export let options = {
    vus: 300,
    duration: '60s',
};

export default function() {
    let res = http.get(`http://localhost:8080/${__ENV.route}?input=password`);
    
    check(res, { 'status was 200': r => r.status === 200 });
    
    sleep(0.05);
}
