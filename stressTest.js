import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '5m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1000 },
    { duration: '2m', target: 1500 },
    { duration: '5m', target: 1000 },
    { duration: '5m', target: 100 },
  ]
}

const rand = (max, min) => Math.floor(Math.random() * max - min) + min;

export default function() {
  const BASE_URL = 'http://localhost:3004';
  const randLocationId = rand(20002194, 20121707);
  const randReviewId = rand(1348, 10001847)
  const randUserId = rand(20121742, 21121851)
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/locations/${randLocationId}`,
      null
    ],
    [
      'GET',
      `${BASE_URL}/api/reviews/${randReviewId}`,
      null
    ],
    [
      'POST',
      `${BASE_URL}/api/${randLocationId}/reviews`,
      null
    ]
  ])
  check(http.get(BASE_URL), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
  sleep(1);
}
