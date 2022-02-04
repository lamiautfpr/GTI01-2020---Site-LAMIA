# F.A.Q.

## How do I a new commit?

- Run `git add ...` to stage files.
- Run `git commit` to init creating commit message
- Select the type that the edit fits. **To help:** [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) | [Commitlint: concepts-commit-conventions](https://commitlint.js.org/#/concepts-commit-conventions).
- Add the scope. _What is the scope of this change (e.g. component or file name): (press enter to skip)_.
- Add the subject. _Write a short, imperative tense description of the change (max 87 chars)_
- Add the body. _IProvide a longer description of the change: (press enter to skip)_
- Add the break change. _Are there any breaking changes?_
- Add Add open issues affected. _Does this change affect any open issues?_
- `ctrl+X` to leave `nano` and to save commit message.

## How do I add a new environment variable?

Update the `src/types/env.d.ts` and the `.env.sample` with the new environment variable.

## How do I create a new api version?

- Copy the `v2` (or the latest api version)
- Rename the new folder to `v3`
- Change the `version` variable in the `src/v2/config/api.ts` file to `v3`
- Change the name of the file `src/v3/v2.module.ts` to `src/v3/v3.module.ts`
- Change the name of the module `v2Module` inside the `src/v3/v3.module.ts` to `src/v3/v3Module`
- Import the `v3Module` in the `src/app.module.ts` file
- Add the `v3Module` to the array of imports in the `AppModule`
- Change the folder `sourceRoot` in the `nest-cli.json` file
- Change the Swagger Description in `src/swagger.ts` file
- Done! :)

## How do I create a new migration?

- Code the new entity (Look to the `*.entity.ts` files to see some examples).
- Run `yarn docker db` in another terminal
- **Option 1:** Run `yarn migration:generate <MIGRATION_NAME>` to generate a migration of updated `*.entity.ts` structures
- **Option 2:** Run `yarn migration:create <MIGRATION_NAME>` to generate a new migration empty file
- Done! :)

**OBS1:** There are some exceptions: If you are doing something that can conflict with the data in the database (like add a new value to an enum), you must do it by hand (**use option 2**).

<h4 style="color:red"> OBS2: ALWAYS CHECK YOUR MIGRATIONS! DON'T TRUST, VERIFY!</h4>

## How do I undo a migration?

- Run `migration:revert`

**OBS3:** We can only undo the **last migration**, we can run the command for more than one to undo more than one migration.

<h4 style="color:red"> OBS4: CANNOT MAKE A MIGRATION THAT WENT TO REMOTE REPOSITORY (GITHUB)</h4>

## How to I add a new message error?

- Create a new file in `src/v2/utils/Errors` when error type does not exists.
- Create and exports enum with name `ERRORS_<NAME_ERROR>` with messages errors.
- Create and export class of the error type with attributes: _timeStamp_; _path_; _statusCode_; _errorMessage_; _method_; _errors_;. Use as an example `src/v2/utils/Errors/NotFound.ts`.
- Import th new error in `src/v2/utils/Errors/index.ts`.
- Done! :)

## How to I add a new file unit test?

- Create a new file in `src/v2/test/...`.
- The new file must be the same path as the functionality that will be tested. Example:
  - Test of the createMember Service:
    - **Path functionality:** `src/v2/modules/members/services/member/createMember.service.ts`.
    - **Path test:** `src/v2/test/modules/members/services/member/createMember.service.spec.ts`.
  - Test of the saveFile diskStorage Provider:
    - **Path functionality:** `src/v2/providers/StorageProvider/implementations/DiskStorage.provider.ts`.
    - **Path test:** `src/v2/test/providers/StorageProvider/implementations/diskStorage/saveFile.spec.ts`.
- The units tests have structure:
  - **Description**: <FUNCTIONALITY - TYPE>. Example: `CreateMember - SERVICE`; `SaveFile in disk - PROVIDER`.
    - **Description:** `successful cases`.
      - **it**: `test name`.
    - **Description:** `failure cases`.
      - **it**: `test name`.
- Done! :)

**OBS4:** The name must be descriptive and object.
