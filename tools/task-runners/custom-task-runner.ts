import { ProjectGraph } from '@nrwl/workspace/src/core/project-graph';
import { NxJson } from '@nrwl/workspace/src/core/shared-interfaces';
import { DefaultTasksRunnerOptions, defaultTasksRunner, RemoteCache } from '@nrwl/workspace/src/tasks-runner/default-tasks-runner';
import { AffectedEvent, Task, TasksRunner } from '@nrwl/workspace/src/tasks-runner/tasks-runner';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

class CustomRemoteCache implements RemoteCache {

    constructor(private remoteDirectory: string) {
        console.debug('CustomRemoteCache', remoteDirectory);
    }

    retrieve = (hash: string, cacheDirectory: string): Promise<boolean> => {
        console.debug('CustomRemoteCache::retrieve', { hash, cacheDirectory });
        
        const hashCommit = hash + '.commit';
        const local = path.join(cacheDirectory, hash);
        const remote = path.join(this.remoteDirectory, hash);
        const localCommit = path.join(cacheDirectory, hashCommit);
        const remoteCommit = path.join(this.remoteDirectory, hashCommit);

        if (fs.existsSync(remote)) {
            console.debug('CustomRemoteCache::retrieve - cache hit');
            fsExtra.copySync(remote, local);
            fsExtra.copySync(remoteCommit, localCommit);
            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }

    store = (hash: string, cacheDirectory: string): Promise<boolean> => {
        console.debug('CustomRemoteCache::store', { hash, cacheDirectory });
        
        const hashCommit = hash + '.commit';
        const local = path.join(cacheDirectory, hash);
        const remote = path.join(this.remoteDirectory, hash);
        const localCommit = path.join(cacheDirectory, hashCommit);
        const remoteCommit = path.join(this.remoteDirectory, hashCommit);

        fsExtra.copySync(local, remote);
        fsExtra.copySync(localCommit, remoteCommit);

        return Promise.resolve(true);
    }
}


export type CustomTasksRunnerOptions = DefaultTasksRunnerOptions & {
    remoteDirectory: string;
}

export const customTasksRunner: TasksRunner<CustomTasksRunnerOptions> =
    (tasks: Task[], options: CustomTasksRunnerOptions, context?: {
        target?: string;
        initiatingProject?: string | null;
        projectGraph: ProjectGraph;
        nxJson: NxJson;
    }): Observable<AffectedEvent> => {

        console.debug('executing customTaskRunner');
        options.remoteCache = new CustomRemoteCache(options.remoteDirectory);
        return defaultTasksRunner(tasks, options, context);

    }

export default customTasksRunner;