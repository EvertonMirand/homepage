import React, { useEffect } from 'react';

import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Company, Job, JobGrid } from './styles';
import { listJobsRequest } from '~/store/modules/jobs/actions';

export default function Jobs({ forwardRef }) {
  const jobs = useSelector(({ jobs: fetchedJobs }) => fetchedJobs.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listJobsRequest('javascript', 1));
  }, [dispatch]);
  const JobsCard = () =>
    jobs.map(job => (
      <Job key={job.id}>
        <Company>
          <span>{job.company}</span>
          <img src={job.company_logo} alt="Logo" />
        </Company>
        <div>{ReactHtmlParser(job.description)}</div>
        <div>{ReactHtmlParser(job.how_to_apply)}</div>
      </Job>
    ));
  return (
    <Container ref={forwardRef}>
      <JobGrid>
        <JobsCard />
      </JobGrid>
    </Container>
  );
}
