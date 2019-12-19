import React from 'react';

import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Container, Company, Job, JobGrid, Spinner } from './styles';
import { listJobsRequest } from '~/store/modules/jobs/actions';

export default function Jobs({ forwardRef }) {
  const jobs = useSelector(({ jobs: fetchedJobs }) => fetchedJobs.jobs);
  const loading = useSelector(({ jobs: fetchedJobs }) => fetchedJobs.loading);
  const dispatch = useDispatch();
  const listJobsDispatch = text => dispatch(listJobsRequest(text, 1));

  const onChange = e => listJobsDispatch(e.target.value);

  const JobsCard = () =>
    jobs.map(job => (
      <Job key={job.id}>
        <Company>
          <span>{job.company}</span>
          <LazyLoad>
            <img src={job.company_logo} alt="Logo" />
          </LazyLoad>
        </Company>
        <div>{ReactHtmlParser(job.description)}</div>
        <div>{ReactHtmlParser(job.how_to_apply)}</div>
      </Job>
    ));

  return (
    <Container ref={forwardRef}>
      <input
        type="text"
        placeholder="Pesquisar emprego.."
        onChange={onChange}
      />
      <JobGrid>
        {loading ? (
          <Spinner />
        ) : (
          <LazyLoad>
            <JobsCard />
          </LazyLoad>
        )}
      </JobGrid>
    </Container>
  );
}
