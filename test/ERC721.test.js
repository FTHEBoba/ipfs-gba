const {accounts, contract, web3} = require('@openzeppelin/test-environment');
const {
  BN,
  constant,
  ether,
  balance,
  expectRevert,
} = require('@openzeppelin/test-helpers');
const {expect} = require('chai');

const ERC721 = contract.fromArtifact('ERC721');
const IERC721 = contract.fromArtifact('IERC721');
const IERC721Metadata = contract.fromArtifact('IERC721Metadata');

describe('ERC721', function () {
  const [owner, alice, bob] = accounts;
  const name = 'Pokemon Fire';
  const symbol = 'PKM-F';
  const ipfs_hash = 'QmPJD8k2Lawf6hEo79AjUGFU8xoZ6bNMjC12GM9AAPrA7v';

  beforeEach(async function () {
    this.token = await ERC721.new(name, symbol, ipfs_hash, {from: owner});
    this.ierc721 = await IERC721.at(this.token.address);
    this.ierc721_meta = await IERC721Metadata.at(this.token.address);
  });

  it('create token succ', async function () {
    expect(await this.ierc721_meta.name()).to.equal(name);
    expect(await this.ierc721_meta.symbol()).to.equal(symbol);
  });

  it('can mint token', async function () {
    let tokenID = 0;
    await this.token.safeMint(alice, tokenID, {from: owner});
    expect(await this.ierc721_meta.tokenURI(tokenID)).to.equal(
      `${ipfs_hash}${tokenID}`
    );
    expect(await this.ierc721.ownerOf(tokenID)).to.equal(alice);
  });

  it('can transfer token', async function () {
    let tokenID = 0;
    await this.token.safeMint(alice, tokenID, {from: owner});
    expect(await this.ierc721_meta.tokenURI(tokenID)).to.equal(
      `${ipfs_hash}${tokenID}`
    );
    expect(await this.ierc721.ownerOf(tokenID)).to.equal(alice);
    await this.ierc721.safeTransferFrom(alice, bob, tokenID, {from: alice});
    expect(await this.ierc721.ownerOf(tokenID)).to.equal(bob);
  });
});
